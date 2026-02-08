# Mapzo AI Lead Collection Setup Instructions

Follow these steps to set up the backend and API keys for the lead collection page.

## 1. Google Sheets & Apps Script Setup

1.  **Create a Google Sheet**: Create a new Google Sheet where you want to store the leads.
2.  **Open Apps Script**: In the Google Sheet, go to `Extensions` > `Apps Script`.
3.  **Copy the Script**: Replace the contents of `Code.gs` with the following code:

```javascript
// Google Apps Script for Mapzo AI Lead Collection

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Check for existing place_id to avoid duplicates
    const placeId = data.place_id;
    const existingData = sheet.getDataRange().getValues();
    for (let i = 1; i < existingData.length; i++) {
        if (existingData[i][4] === placeId) { // Column 5 is Place ID
            return ContentService.createTextOutput(JSON.stringify({
                status: 'error',
                message: 'Duplicate Lead'
            })).setMimeType(ContentService.MimeType.JSON);
        }
    }

    // Append new row
    sheet.appendRow([
      new Date(),
      data.business_name,
      data.address,
      data.category,
      data.place_id,
      data.lat,
      data.lng,
      data.mobile
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Lead saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4.  **Deploy as Web App**:
    *   Click `Deploy` > `New Deployment`.
    *   Select type: `Web App`.
    *   Execute as: `Me`.
    *   Who has access: `Anyone` (required for frontend POST without auth).
    *   Copy the `Web App URL`. This will be your `VITE_BACKEND_URL`.

## 2. Google Maps API Setup

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  **Create a Project**: If you haven't already.
3.  **Enable APIs**: Enable the **Places API** and **Maps JavaScript API**.
4.  **Create Credentials**: Go to `APIs & Services` > `Credentials` and create an **API Key**.
5.  **Restrict (Optional but Recommended)**: Restrict the key to use only the Places API and Maps JavaScript API, and restrict by HTTP referrers to your website's domain.

## 3. Environment Variables

Create a file named `.env` in the root of the project (copy from `.env.example`) and fill in the values:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_from_step_2
VITE_BACKEND_URL=your_web_app_url_from_step_1
```
