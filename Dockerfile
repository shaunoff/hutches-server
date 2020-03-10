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

# These are ENV variables the app cares about. In general we always want NODE_ENV to be production
ENV NODE_ENV="production"
ENV ENGINE_API_KEY=""
ENV LEGACY_API_HOST=""
ENV SERVICE_API_HOST=""
ENV TRACING=""
ENV DEBUG=""

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4000/.well-known/apollo/server-health || exit 1

EXPOSE 4000
CMD [ "yarn", "start" ]
