const admin = require("firebase-admin");

// sacamos el json de auth de firebase
const firebaseCredentials = {
  type: "service_account",
  project_id: "auth-prueba-3c849",
  private_key_id: "94b1aaa6aab243de85af3c88e10f2cb3b070bfdb",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDU6p2JNFi5tFAW\niSPpZg3gGCKpxRoG215neeqd3KBNXfhfHpvh7ljSsUv4rcPtt5GiqDUv6TBwDz7o\nq24HJD5N1RaFlwbnIQkxqHtoaktg753KRaVHKQ8FUk5n1YA/u5PUUYEmvUoX3cgJ\n/n50x/1RjAJmiMBK4nzaHu4GbWnoe3CDzswBa5ywlZpAy0Hp+tsCsduedBgbsv8b\nFMHiGhvOkT4/L8XYilM+5GxMd9EhYMuFBCM16CmyPJXIMt92BSM9dBcaStBfCHEN\nV637xckrsbE99OmDm1Oq77MRl+A3zxfq8Yf7OwZ5uUMuymz5REpTVzWxZr6ypVA+\nkhZAfKYHAgMBAAECggEAYi29buMgdqFavMmIMbvJcigu87HbioXlRjnFof12Pbaz\nLMlkgA30D1OKAKW/zwHyudpujCUvHL0q+QbzuX9Q63ry4678k9976dYS8dbx40Ua\nsYbj66hXMND/LooYlUrdo+3hbAek/tRZxaIAlcESYmP5R2aPpPhDMiFJCNWzHGvX\nTbTriKWUVBSr0nB4ZgFJF8q6bz8CyOs7ZeE8gLgr6K79tIHv2BhEEooLd1L75F2u\nY7YpvMpEUAMaqV2nq3cYw3fOOeYc/jzrlURoBi/BeE0OPZA5EhZ4OEVn7OFIsUw+\nTUWPHV3S7PwKr6NCZb0Kcdx91rWI4m+rMKW90/IP4QKBgQD7vBWTIMaSCgAta0X+\nAdc1UFrJfZjznqQhDovXobt8BXTBKN2hMU7HIMg2cN54pMYrQkKm+1VdBh+6KF+r\nU2Q8bSiqCkRLZh7RFLMnJYeUzjbGKOfarcT7ToVijgUZHiejZKmcThABmGuTz159\nyGPQx5Xoq0AwhR4rt6oOihqF5QKBgQDYhieKbNEeFihzybnl9QBQINcRoyGJvK0+\nEba9tc8Mex4g9WNJMqJI5nQOii/Vuwpa2lFqcrh4WPbZsFuu20+2KsvV0fIP9whg\nfIXIPx5SYvtjWesD56F3Gu+dpn+V6VOPR93BkRHOZ0JNcsDdzK8jDBYD+Z5XfOpX\n/tEjCw/9ewKBgEaF0qV9MSQImTQgMWOPsHLHKCf6f7cAYorAQH0QWi3MeYEDqdNW\ntPMkQ/K8fBbgUoQb9ABDuQ5ugMTuOp8MpbAoBJRee/ODkG6Slf4JjYoqmz24h/vD\nYsPko4mQr+zxfblQohOf6uwHf1vRZG9ojE4ZG+4qy7jMEj+9HG8mUXfhAoGBAIgW\nsa2APWNCnARCivPsrFiwe1ybgo3Wp7B2Y7wTFGKM01/1u4SbLYLSTamB0xTrrVNz\nGm7kUetaRzSFcuqQ7yXY+iqW/SRpqLs0KMW2XjF8AvLr5hmbMVHx/R7CMjif4SQS\nEGAD9QQcxIB3Gp+NcZp+kyvGbW4hlgzenMYAwvkXAoGAFVjMNN/Y9RwNvhkt8vmh\nozP8u1MDmWoLUkxgC/8iqVCXmuXE3rNdXPYuPeV6+IckGmLC0HvA5ceFczcMpv97\nJSiR21DkgpXEOIYcJtC5+BnHQlG6Jdb+/DByvk+wGZ7xmcpVPO2v29IHo2PlCfBA\njse9+KP18o6dL+l0PXrBHzA=\n-----END PRIVATE KEY-----\n".replace(
      /\\n/g,
      "\n"
    ),
  client_email:
    "firebase-adminsdk-z6wyp@auth-prueba-3c849.iam.gserviceaccount.com",
  client_id: "115779973484799180611",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z6wyp%40auth-prueba-3c849.iam.gserviceaccount.com",
};

admin.initializeApp({
  // cert sirve para que pueda leer la credencial de firebase
  credential: admin.credential.cert(firebaseCredentials),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

module.exports = admin;
