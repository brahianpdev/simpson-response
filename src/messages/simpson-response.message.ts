import { ISimpsonResponse } from '../interfaces/simpson-response.interface';

export const SimpsonResponse: ISimpsonResponse = {
	OK: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/200_xjzaks.png',
		code: 200,
		message: 'OK',
	},
	MOVED_PERMANENTLY: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/301_uk0qah.png',
		code: 301,
		message: 'Moved Permanently',
	},
	UNAUTHORIZED: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/401_pbvzql.png',
		code: 401,
		message: 'Unauthorized',
	},
	FORBIDDEN: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/403_w7pk5n.png',
		code: 403,
		message: 'Forbidden',
	},
	NOT_FOUND: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/404_bzafrw.png',
		code: 404,
		message: 'Not Found',
	},
	INTERNAL_SERVER_ERROR: {
		url: 'https://res.cloudinary.com/dzxzhwcjv/image/upload/v1669169546/thesimpsons/500_gomppl.png',
		code: 500,
		message: 'Internal Server Error',
	},
};
