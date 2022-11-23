
# HTTP Simpsons Responses

Custom HTTP responses with The Simpsons with the intention of expanding to all existing HTTP code. If you are interested in collaborating, please review the corresponding section.


## Installation

```bash
  npm i simpsons-status
```

If you are working with typescript:
```
npm i --save-dev @types/simpsons-status
```

## Usage/Examples

```typescript
// Usage
import SimpsonResponse from 'simpson-response'

app.get('/', (req: Request, res: Response) => {
	res.send(SimpsonResponse.UNAUTHORIZED);
});

// Example
{
  "url": "SimpsonImage",
  "code": 401,
  "message": "Unauthorized"
}
```
## Contributing

**Contributions are always welcome!**

Steps for an effective contribution:
- Upload the image of the http code to an image bank.
- Create the object as follows: HTTPStatus { url, code, message }. 
- You can see an example of the previous step [here]().
- Make a Pull Request. If you don't know how to make one, check the [Github article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).


## Authors

- [@brahianpdev](https://www.github.com/brahianpdev)

## Credits

The images with their respective HTTP response states have been made by WinkHosting.

- [@winkhosting](https://www.instagram.com/p/Cc78qwquYXG/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

