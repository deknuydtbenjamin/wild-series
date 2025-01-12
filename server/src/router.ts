import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

import programActions from "./modules/program/programAction";

router.get("/api/program", programActions.browse);
router.get("/api/program/:id", programActions.read);
router.put("/api/program/:id/", programActions.validate, programActions.edit);
router.post("/api/program", programActions.validate, programActions.add);
router.delete("/api/program/:id", programActions.destroy);

/* ************************************************************************* */

import categoryActions from "./modules/category/categoryActions";

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);
router.put(
  "/api/categories/:id",
  categoryActions.validate,
  categoryActions.edit,
);
router.post("/api/categories", categoryActions.validate, categoryActions.add);
router.delete("/api/categories/:id", categoryActions.destroy);

export default router;
