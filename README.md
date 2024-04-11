This website is built using React. To get started, run `npm install` and then `npm start`.

## Adding an event

All events are stored in the following Google sheet:
https://docs.google.com/spreadsheets/d/1ZPxRIYghouljWjW7lFHa7yvkmO88INpQsiyxqvmAtsc/edit?usp=sharing

To add an event, simply add a new row to the sheet. The following columns are required:

* `Title` - The title of the event
* `Image` - Name of the image file (it should be present in the `src/Components/images` directory)
* `Date` - The date of the event in the format `YYYY-MM-DD`
* `Info` - A short description of the event

The website will automatically update in a few minutes to include the new event.

## Adding a new image

To add a new image, simply add the image file to the `src/Components/images` directory. Then, update the `Image` column in the Google sheet to match the name of the image file.

If you want to add a new image to an existing event, simply update the `Image` column in the Google sheet to match the name of the new image file.

Note: The image file name must be unique and the correct file extension must be used. For example, `image.png` is a valid name, but `image` is not.

## Seeing form responses

To see the form responses, go to console.firebase.google.com and select `c-cube-project`. Then, select `Firestore Database` from the left menu and click on the contacts or donation collection to see their respective contents. The collection will contain all the form responses.