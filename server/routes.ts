// Reference: blueprint:javascript_object_storage (public-file-serving example)
import type { Express } from "express";
import { createServer, type Server } from "http";
import { ObjectStorageService } from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve public assets from App Storage
  app.get("/public-objects/:category/:filename", async (req, res) => {
    const filePath = `${req.params.category}/${req.params.filename}`;
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error searching for public object:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // List available media files from the media library
  app.get("/api/media/list", async (req, res) => {
    try {
      // Read the media library data
      const fs = await import("fs/promises");
      const path = await import("path");
      const mediaLibPath = path.join(process.cwd(), "src/data/mediaLibrary.json");
      
      try {
        const mediaData = await fs.readFile(mediaLibPath, "utf-8");
        res.json(JSON.parse(mediaData));
      } catch (err) {
        // If file doesn't exist or can't be read, return empty structure
        res.json({
          gallery: [],
          services: {},
          team: [],
          hero: {}
        });
      }
    } catch (error) {
      console.error("Error listing media:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
