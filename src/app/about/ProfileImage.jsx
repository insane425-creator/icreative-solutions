export default function ProfileImage({ src, alt, name, className = "w-full h-full", imageErrors, onError }) {
  if (imageErrors && imageErrors.has(src)) {
    return (
      <div className={`${className} rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-800 dark:to-gray-950 flex items-center justify-center font-bold text-white`}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} rounded-xl object-cover`}
      onError={() => onError && onError(src)}
      loading="lazy"
    />
  );
}