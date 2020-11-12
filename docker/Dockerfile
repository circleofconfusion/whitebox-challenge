FROM mysql:5.7
ENV MYSQL_RANDOM_ROOT_PASSWORD true
ENV MYSQL_DATABASE code-challenge
# Normally, I'd script these so the username/password aren't stored in Git,
# but since this is throwaway code, I'll just put them here to make your life simple.
ENV MYSQL_USER testuser
ENV MYSQL_PASSWORD testpass
COPY data.sql /docker-entrypoint-initdb.d/data.sql