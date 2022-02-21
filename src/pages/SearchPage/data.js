let successData = `{
  "data": [
    {
      "created_at": "2009-06-02T20:12:29.000Z",
      "url": "",
      "protected": false,
      "username": "elonmusk",
      "name": "Elon Musk",
      "profile_image_url": "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_normal.jpg",
      "verified": true,
      "description": "",
      "id": "44196397"
    }
  ]
}`;

successData = JSON.parse(successData);

let errorData = `{
  "errors": [
    {
      "value": "fkdfkdfjfkfjk",
      "detail": "Could not find user with usernames: [fkdfkdfjfkfjk].",
      "title": "Not Found Error",
      "resource_type": "user",
      "parameter": "usernames",
      "resource_id": "fkdfkdfjfkfjk",
      "type": "https://api.twitter.com/2/problems/resource-not-found"
    }
  ]
}
`;

errorData = JSON.parse(errorData);

export { successData, errorData };
