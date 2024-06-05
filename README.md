# FINAL TOUCH

<!-- {
  while using mapbox always add this to your index.html
  /* <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
  <link rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
    type="text/css" /> */
} -->

<!--
upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),

  if (!req.files || Object.keys(req.files).length === 0) {
      const response = new Response(
        false,
        400,
        "Video and image are required."
      );
      return res.status(response.code).json(response);
    }

    // Upload video
    const videoResult = await cloudinary.uploader.upload(
      req.files.video[0].path,
      {
        resource_type: "video",
      }
    );
    const videoUrl = videoResult.secure_url;

    // Upload image
    const imageResult = await cloudinary.uploader.upload(
      req.files.image[0].path,
      {
        resource_type: "image",
      }
    );
    const imageUrl = imageResult.secure_url;
-->
