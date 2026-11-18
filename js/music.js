/**
 * Floating vinyl button that opens a Spotify player.
 *
 * Browsers block audio until the visitor interacts, so nothing loads or plays
 * on page load. The Spotify iFrame API is fetched on the first click, which
 * then tries to start playback; the vinyl spins while the track is playing.
 * Visitors not logged in to Spotify hear a 30-second preview (Spotify's rule).
 */
(() => {
  const root = document.querySelector(".music");
  if (!root) return;

  const toggle = root.querySelector(".music__toggle");
  const panel = root.querySelector(".music__panel");
  const host = root.querySelector(".music__embed");
  let controller = null;
  let loading = false;

  const setOpen = (open) => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Hide music player" : "Open music player");
  };

  const loadPlayer = () => {
    loading = true;
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      IFrameAPI.createController(
        host,
        { uri: host.dataset.spotifyUri, width: "100%", height: 80 },
        (embed) => {
          controller = embed;
          embed.addListener("ready", () => embed.play());
          embed.addListener("playback_update", (event) => {
            root.classList.toggle("is-playing", !event.data.isPaused);
          });
        }
      );
    };

    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.head.append(script);
  };

  toggle.addEventListener("click", () => {
    setOpen(panel.hidden);
    if (!controller && !loading) loadPlayer();
  });
})();
