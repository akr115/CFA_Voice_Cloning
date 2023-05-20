import fetch from "node-fetch";

/**
 * https://docs.play.ht/reference/api-generate-audio
 */
export const playhtRequest = async (
  /**
   * Can be a persona (has the same keys)
   */
  credentials: { playhtSecret?: string; playhtUserId?: string },

  endpoint:
    | "GET:getVoices?ultra=true"
    | "GET:getVoices"
    | "GET:getClonedVoices"
    | "POST:tts",

  /**
    For convert:

   voice is the id of the voice used to synthesize the text. Refer to the Voices reference file file for more details.

content is an array of strings, where each string represents a paragraph in plain text format.

speed this controls how fast the output would be ranges from 0.5 - 1.5. optional

preset this controls the quality of the output audio, 'real-time', ‘balanced’, ‘low-latency’, 'high-quality'. optional


OLD ONES:


voice is the ID of the voice used to synthesize the text. Refer to the Voices reference file for more details.
note Only one of content or ssml can be passed:

content is an array of strings, where each string represents a paragraph in plain text format.

ssml is an array of strings, where each string represents a paragraph in SSML format. Learn more about SSML. Not all SSML features are supported with all voices.

title is a field to name your file. You can use this name to find the audio in your Play.ht dashboard.

narrationStyle is a string representing the tone and accent of the voice to read the text. Make sure the value for narrationStyle is supported by the voice in your request. Refer to the Voices reference file for more details.

globalSpeed is a string in the format <number>%, where <number> is in the closed interval of [20, 200]. Use this to speed-up, or slow-down the speaking rate of the speech.

pronunciations is an array of key-value pair objects, where key is the source string (e.g. "Play.ht"), and value is the target pronunciation (e.g. "Play dot H T"). Use this when you want to customize the pronunciation of a certain word/phrase (e.g. your brand name).

trimSilence is a boolean value. When enabled, the audio will be trimmed to remove any silence from the end of the file.

transcriptionId - Pass this to update an existing audio file

   
     */
  body?: { [key: string]: any }
) => {
  if (!credentials.playhtSecret || !credentials.playhtUserId) {
    return { isSuccessful: false, message: "No play.ht credentials" };
  }

  const baseUrl = "https://play.ht/api/v2/";
  const [method, endpointUrl] = endpoint.split(":");

  const headers = {
    Authorization: `Bearer ${credentials.playhtSecret}`,
    "X-User-ID": credentials.playhtUserId,
    "content-type": "application/json",
    accept: "*/*",
  };
  console.log({ headers });
  const res = await fetch(`${baseUrl}${endpointUrl}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers,
  }).catch((err: any) => {
    throw err; // Error caused by fetch
  });

  console.log({ statusText: res.statusText });
  try {
    const text = await res.text();

    console.log({ text });
    const chunks = text.split("data: ");
    const jsonString = chunks.pop()?.trim();
    if (!jsonString) {
      return;
    }
    const json = JSON.parse(jsonString);
    // const obj = await returned.json();

    return json;
  } catch (e) {
    console.log(`parsing response error `, e);
  }
};
