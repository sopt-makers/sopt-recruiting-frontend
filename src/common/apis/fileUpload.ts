import tokenInstance from '@apis/tokenInstance';

// PresignedUrl 발급
export const getPresignedUrl = async (fileName: string): Promise<string> => {
  const res = await tokenInstance.post<{ presignedUrl: string }>(
    `/recruiting-answer/presigned-url`,
    {
      credentials: 'include',
    },
    {
      params: {
        fileName: fileName,
      },
    },
  );

  return res.data.presignedUrl;
};

// PresignedUrl 업로드 검증
export const verifyFileUpload = async (): Promise<string> => {
  const res = await tokenInstance.get<{ s3Key: string }>(`/recruiting-answer/presigned-url/verify`);

  return res.data.s3Key;
};

// 파일 확장자에서 Content-Type 추출
const getContentTypeFromFileName = (fileName: string): string => {
  const contentTypeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    pdf: 'application/pdf',
    txt: 'text/plain',
    html: 'text/html',
    json: 'application/json',
  };

  const extension = fileName.split('.').pop()?.toLowerCase() || '';
  return contentTypeMap[extension] || 'application/octet-stream';
};

// S3 업로드
export const uploadToS3 = async (presignedUrl: string, file: File): Promise<void> => {
  const contentType = getContentTypeFromFileName(file.name);

  const res = await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': contentType,
    },
  });
  if (!res.ok) {
    // 응답 본문을 읽어서 에러 상세 정보 확인
    const errorText = await res.text();
    console.error('S3 업로드 실패 상세 정보:', {
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers.entries()),
      errorBody: errorText,
    });
    throw new Error(`S3 업로드 실패: ${res.status} ${res.statusText} - ${errorText}`);
  }
};
