## Create an image locally and run

```bash
    docker build -t user-backend .
```

```bash
    docker run -d -p 3000:3000 -e DATABASE_URL="DB_LINK(aiven or neon-tech)" user-backend
```