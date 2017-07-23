/* eslint prefer-template:1 */

function getNonTemplateUrl(baseUrl, endpoint, queryParams = []) {
  let bad = baseUrl + '/' + endpoint + '?';
  bad += queryParams.reduce((result, param) => (result + param.key + '=' + param.value), '');
  return bad;
}

function getTemplateUrl(baseUrl, endpoint, queryParams = []) {
  const paramString = queryParams.reduce((result, param) => (`${result}${param.key}=${param.value}`), '');
  const good = `${baseUrl}/${endpoint}?${paramString}`;
  return good;
}

export { getNonTemplateUrl, getTemplateUrl };
