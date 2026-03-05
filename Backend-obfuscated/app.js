const _0x35f0b4 = _0x8dca;
function _0x8dca(_0x116b87, _0x5ceca5) {
  const _0x39d6bf = _0x39d6();
  return (
    (_0x8dca = function (_0x8dca1d, _0x37dcd6) {
      _0x8dca1d = _0x8dca1d - 0xfa;
      let _0x2f2c85 = _0x39d6bf[_0x8dca1d];
      return _0x2f2c85;
    }),
    _0x8dca(_0x116b87, _0x5ceca5)
  );
}

function _0x39d6() {
  const _0x5ae9c2 = [
    "CLOUDINARY_API_SECRET",
    "/api/v1/eats/stores",
    "cookie-parser",
    "./routes/order",
    "https://checkout.stripe.com",
    "112652qssHmB",
    "express",
    "urlencoded",
    "Can\x27t\x20find\x20",
    "3948489iilVcg",
    "1700223BSBfFx",
    "all",
    "608376uFiONs",
    "views",
    "1898460mKyxai",
    "json",
    "/api/v1/eats/cart",
    "/api/v1/eats/orders",
    "./routes/restaurant",
    "join",
    "8sYluVI",
    "./routes/payment",
    "/api/v1/eats",
    "body-parser",
    "./routes/couponRoutes",
    "env",
    "config",
    "48CRQfTa",
    "./routes/cart",
    "\x20on\x20this\x20server\x20!",
    "./routes/auth",
    "set",
    "originalUrl",
    "pipe",
    "30kb",
    "10lZrxiC",
    "1IEDPUe",
    "CLOUDINARY_API_KEY",
    "/proxy",
    "express-fileupload",
    "1677294ppanPZ",
    "/api/v1/users",
    "url",
    "use",
    "/api/v1/eats/menus",
    "cors",
    "144HNXuow",
    "309980lAqwRy",
  ];
  _0x39d6 = function () {
    return _0x5ae9c2;
  };
  return _0x39d6();
}

const express = require(_0x35f0b4(0x103)),
  app = express(),
  path = require("path"),
  cookieParser = require(_0x35f0b4(0xff)),
  bodyParser = require(_0x35f0b4(0x114)),
  cloudinary = require("cloudinary"),
  fileUpload = require(_0x35f0b4(0x124)),
  cors = require(_0x35f0b4(0xfa)),
  errorMiddleware = require("./middlewares/errors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ROUTES */

const foodRouter = require("./routes/foodItem"),
  restaurant = require("./routes/restaurant"),
  menuRouter = require("./routes/menu"),
  coupon = require("./routes/couponRoutes"),
  order = require("./routes/order"),
  auth = require("./routes/auth"),
  payment = require("./routes/payment"),
  cart = require("./routes/cart");

app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "30kb" }));

app.use("/api/v1/eats", foodRouter);
app.use("/api/v1/eats/menus", menuRouter);
app.use("/api/v1/eats/stores", restaurant);
app.use("/api/v1/eats/orders", order);
app.use("/api/v1/users", auth);
app.use("/api/v1", payment);
app.use("/api/v1/coupon", coupon);
app.use("/api/v1/eats/cart", cart);

/* VIEW ENGINE */

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* ROOT ROUTE (ADDED FIX) */

app.get("/", (req, res) => {
  res.send("MedEasy Backend is running 🚀");
});

/* 404 HANDLER */

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Can't find " + req.originalUrl + " on this server !",
  });
});

/* ERROR HANDLER */

app.use(errorMiddleware);

module.exports = app;