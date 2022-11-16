import { useEffect, useState } from "react";
import styled from "./form.module.css";
import { useRouter } from "next/router";

interface RegistrationFormProps {
  onSubmit: (values: any) => void;
}

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
  const router = useRouter();
  const { app_id, redirect_url } = router.query;
  const { onSubmit } = props;
  const [signingId, setSigningId] = useState(makeid(9));
  const [appId, setAppId] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isEnable, setEnable] = useState(true);
  const handleKeyUp = () => {
    // if (signingId.length > 0 && appId.length > 0) setEnable(false);
    // else setEnable(true);
  };

  useEffect(() => {
    app_id && setAppId(app_id.toString());
  }, [app_id]);

  useEffect(() => {
    redirect_url && setRedirectUrl(redirect_url.toString());
  }, [redirect_url]);

  return (
    <div className={styled.wrapper}>
      <label className={styled.label}>
        Signing Id (Auto generate)
        <input
          className={styled.input}
          type="text"
          id="signing_id-input"
          placeholder="signing_id"
          value={signingId}
          onKeyUp={handleKeyUp}
          onChange={(event) => setSigningId(event.target.value)}
        />
      </label>

      <br />
      <br />
      <label className={styled.label}>
        App Id (from query param app_id)
        <input
          className={styled.input}
          type="text"
          id="appId-input"
          placeholder="app_id"
          onKeyUp={handleKeyUp}
          value={appId}
          onChange={(event) => setAppId(event.target.value)}
        />
      </label>

      <br />
      <br />
      <label className={styled.label}>
        Redirect Url (from query param redirect_url)
        <input
          className={styled.input}
          type="text"
          id="redirect_url-input"
          placeholder="redirect_url"
          onKeyUp={handleKeyUp}
          value={redirectUrl}
          onChange={(event) => setRedirectUrl(event.target.value)}
        />
      </label>

      <br />
      <br />
      <button
        type="submit"
        id="button-input"
        // disabled={isEnable}
        onClick={() =>
          onSubmit({
            redirectUrl,
            signingId,
            appId,
          })
        }
      >
        Approve singing
      </button>
    </div>
  );
};
