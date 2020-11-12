# Code Challenge

This is my response to the Whitebox Code Challenge.

Overall, this took me a bit more than 3 hours between figuring out:

- How to setup a MYSQL docker container
- Some of the oddities of the mysql api in NodeJS
- How to create and write Excel files to disk
- How to efficiently query this particular database

Were this production code, I'd definitely take the time to
absolutely, positively, under no circumstances,
include usernames and passwords in code that makes it to the Git repository.

Given more time, I'd have used a more recent version of MYSQL.
I found that the promise-mysql library for nodeJS doesn't support newer connection
methods, and some tweaking of the database is necessary to allow it to connect.

Were this a regularly used script, I'd include the ability to pass
command line arguments so one could, say, set the output filename to
something other than Rates.xlsx.

## Setup

I chose to use a docker container for MYSQL so that it can be
setup the same way I have it on my machine.

Build the container with the commands

  cd docker
  docker build -t whitebox-mysql .

Run the container with the command

  docker run -d --name whitebox-db --rm whitebox-mysql

This set of commands will build a custom docker image, fire up the container,
and load the example SQL data from data.sql.

To kill the docker container, run

  docker stop whitebox-db

## Run 

To execute the script, run `npm run start` from the root directory.

Once execution is complete, you'll see a file called Rates.xlsx in the root directory.
