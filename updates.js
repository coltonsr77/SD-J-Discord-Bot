const BOT_VERSION = "1.0.0"; // change when you release

async function checkForUpdates() {
  try {
    const response = await fetch("https://api.github.com/repos/coltonsr77/SD-J-Discord-Bot/releases/latest");
    if (!response.ok) throw new Error("Failed to fetch GitHub release info");

    const latest = await response.json();
    const latestVersion = latest.tag_name.replace("v", "");

    return {
      current: BOT_VERSION,
      latest: latestVersion,
      upToDate: BOT_VERSION === latestVersion,
      url: latest.html_url
    };
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = { checkForUpdates, BOT_VERSION };
