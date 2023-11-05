# if you use python for backend
FROM python:3.10-alpine
WORKDIR /backend

COPY /docker/backend/requirements.txt .
RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

COPY run.py /backend/
COPY /scripts /backend/scripts

CMD ["uvicorn", "run:app", "--reload", "--host", "0.0.0.0", "--port", "3001"]

# if you use node for backend
# FROM node:latest
# WORKDIR /backend

# COPY run.js /backend/
# COPY /scripts /backend/
# CMD ["node", "run.js"]