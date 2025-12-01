const processFileUpload = (file) => {
  if (!file) return null;
  
  return {
    data: file.buffer,
    contentType: file.mimetype
  };
};

const validateFileType = (file, allowedTypes = ['application/pdf']) => {
  if (!file) return true;
  return allowedTypes.includes(file.mimetype);
};

const validateFileSize = (file, maxSizeInMB = 5) => {
  if (!file) return true;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

module.exports = {
  processFileUpload,
  validateFileType,
  validateFileSize
};