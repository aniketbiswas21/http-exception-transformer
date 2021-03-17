/**
 * @todo : implement all 4XX and 5XX codes from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

import { SourceRow } from './interfaces/source.interface'

export const exceptionList: Array<SourceRow> = [
  {
    code: 400,
    name: 'BadRequestException',
    message: 'The server could not understand the request due to invalid syntax.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
  },
  {
    code: 401,
    name: 'UnAuthorizedException',
    message: 'The client must authenticate itself to get the requested response.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
  },
  {
    code: 403,
    name: 'ForbiddenException',
    message: 'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403',
  },
  {
    code: 404,
    name: 'NotFoundException',
    message: 'The server can not find the requested resource',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
  },
  {
    code:405,
    name:"MethodNotAllowedException",
    message:"The request method is known by the server but has been disabled and cannot be used",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405",
  },
  {
    code:406,
    name:"NotAcceptableException",
    message:"This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406",
  },
  {
    code:407,
    name:"ProxyAuthenticationException",
    message:"This is similar to 401 but authentication is needed to be done by a proxy.",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
  },
  {
    code:408,
    name:"RequestTimeOutException",
    message:"This response is sent on an idle connection by some servers, even without any previous request by the client.",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408",
  },
  {
    code:409,
    name:"ConflictException",
    message:"This response is sent when a request conflicts with the current state of the server.",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409",
  },
  {
    code:410,
    name:"GoneException",
    message:"This response is sent when the requested content has been permanently deleted from server, with no forwarding address",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410",
  },

  

  
  
  
  
  {
    code: 500,
    name: 'InternalServerException',
    message: 'The server has encountered a situation it does not know how to handle.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500',
  },
]
