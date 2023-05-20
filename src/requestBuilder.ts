export function requestBuilder(form: FormData) {
    const options: RequestInit = {
      method: "POST",
      headers: {
        accept: "application/json",
        AUTHORIZATION: "Bearer Use Your Own API Key",
        "X-USER-ID": "Use Your Own User ID",
      },
    };
  
    options.body = form;
    return options;
  }
  