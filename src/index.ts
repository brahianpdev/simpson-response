import express, { Request, Response } from 'express';
import { SimpsonResponse } from './messages/simpson-response.message';

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

// Example of use
app.get('/', (req: Request, res: Response) => {
	res.send(SimpsonResponse.UNAUTHORIZED);
});
