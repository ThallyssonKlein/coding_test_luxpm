FROM python:3.7

RUN mkdir /src
WORKDIR /src

EXPOSE 5001

COPY . /src

RUN pip install pipenv
RUN pipenv install --skip-lock

CMD pipenv run python main.py