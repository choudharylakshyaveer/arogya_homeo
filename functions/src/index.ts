/**
 * Firebase Cloud Functions entry point
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";

// Limit concurrent instances (cost control)
setGlobalOptions({maxInstances: 10});

/**
 * Health check API
 * GET /api
 */
export const api = onRequest((req, res) => {
  logger.info("Health check called");

  res.status(200).json({
    status: "OK",
    service: "ArogyaHomeo Functions",
    timestamp: new Date().toISOString(),
  });
});
