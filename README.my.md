
```
docker run -p 58090:8090 -v `pwd`/data:/opt/fluree-server/data fluree/server
```
 -> localhost:58090

doc http-api https://next.developers.flur.ee/docs/reference/http-api/


```
 curl --location 'http://localhost:58090/fluree/create' \
--header 'Content-Type: application/json' \
--data '{
  "ledger": "cryptids",
  "insert": {
    "@id": "my-first-cryptid",
    "name": "Freddy the Yeti"
  }
}'
```

# fluree-client
- https://github.com/fluree/fluree-client

# bootstrap
```
npm install --save @popperjs/core bootstrap
```