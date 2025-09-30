const debug = false

const loki = {
  enabled: false,
  url: "",
}

const endpoints = {
  "/onboarding/welcome": {
    dohProviders: [
      {
        host: "dns.google",
        path: "/dns-query",
      },
      {
        main: true,
        host: "cloudflare-dns.com",
        path: "/dns-query",
      },
    ],
  },
}

export { debug, loki, endpoints }
