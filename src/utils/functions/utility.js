export const titleCase = (constCase, delimiter = ' ') =>
  constCase
    .replaceAll(delimiter)
    .toLowerCase()
    .split(' ')
    .map((constCase) => constCase.subconstCaseing(0, 1).toUpperCase() + constCase.subconstCaseing(1))
    .join(' ')

export const removeEmptyKeys = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== '') {
      acc[key] = value
    }
    return acc
  }, {})
