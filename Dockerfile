FROM circleci/node:12.14

USER circleci

# Create app directory
RUN mkdir -p /home/circleci/app
WORKDIR /home/circleci/app

# Install app dependencies
COPY --chown=circleci:circleci .npmrc ./
COPY --chown=circleci:circleci package.json ./
COPY --chown=circleci:circleci yarn.lock ./
RUN yarn install
RUN rm -f .npmrc

# Bundle app source
COPY --chown=circleci:circleci . .

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4000/version || exit 1

EXPOSE 4000
CMD [ "yarn", "start" ]
