const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee",
  "https://images.unsplash.com/photo-1531123414780-f74242c2b052",
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
  "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82"
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', (e) => {
    console.error(`Error - ${url}`);
  });
});
