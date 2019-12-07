import { BASE_URL } from './book.service';
import { IFileParams } from './interfaces';

export const prepareFileUrl = ({ id, file, baseUrl }: IFileParams) => {
  baseUrl = baseUrl.replace(':id', String(id));
  baseUrl = baseUrl.replace(':name', file.name);
  baseUrl = baseUrl.replace(':type', file.type);
  return BASE_URL + baseUrl;
};
export const prepareSearchUrl = ({ term, limit, offset, baseUrl }) => {
  baseUrl = baseUrl.replace(':term', term);
  baseUrl = baseUrl.replace(':limit', limit);
  baseUrl = baseUrl.replace(':offset', offset);
  return BASE_URL + baseUrl;
};
