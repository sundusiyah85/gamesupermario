# Migration roadmap

- [x] Inspect the uploaded archive safely and record its capabilities.
- [x] Serve the original game at `/` and preserve its music asset.
- [x] Verify the preview and a representative game-start interaction.
- [x] Bundle the soundtrack with the game and verify the public music URL for Cloudflare hosting.
- [ ] After preview, receive a JSON export if the user wants their old custom questions; Gemini AI needs the player's own key for live verification, and publishing/cutover is only needed if requested.