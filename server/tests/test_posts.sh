myhost="localhost"
port="8888"

echo "
------------- ADDING POSTS -------------
"

curl -iX POST -d content="*HEADER* This is a test post." $myhost:$port/posts
curl -iX POST -d content="*ANOTHER* This is another test post." $myhost:$port/posts
curl -iX POST -d content="*WOAH* whaddaya know it's another post." $myhost:$port/posts

echo "
------------- GETTING POSTS ------------
"

# Getting all posts
curl -iX GET $myhost:$port/posts

# Getting individual posts
curl -iX GET $myhost:$port/post/0
curl -iX GET $myhost:$port/post/1
curl -iX GET $myhost:$port/post/2

echo "
------------ MODIFYING POSTS -------------
"

curl -iX PUT -d content="*HEADER* This is a test post. Modified." $myhost:$port/post/0
curl -iX GET $myhost:$port/post/0

## REMOVING POSTS
# TODO: add tests here
