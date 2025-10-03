import { mergePersistedUrlParamsWithUrl } from "../reproduction/mergePersistedUrlParamsWithUrl";

export const Welcome = () => {
  const linkHref = mergePersistedUrlParamsWithUrl({
    url: "https://astro.dev",
  });

  console.log("href is: ", linkHref);
  return (
    <div
      style={{
        height: "100vh",
        padding: '120px'
      }}
    >
      <a
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
        suppressHydrationWarning
        href={linkHref}
      >
        This is a link
      </a>
      <br/>
      {/* <div>{linkHref}</div> */}
    </div>
  );
};
