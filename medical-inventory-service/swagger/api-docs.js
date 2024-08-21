/**
 * @openapi
 * /items:
 *   get:
 *     summary: Retrieve a list of items
 *     description: This endpoint retrieves a list of all items in the inventory. You can use this endpoint to get an overview of the current inventory.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for an item.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the item.
 *                     example: "Stethoscope"
 *                   quantity:
 *                     type: integer
 *                     description: The quantity of the item in stock.
 *                     example: 10
 *                   description:
 *                     type: string
 *                     description: A description of the item.
 *                     example: "A high-quality stethoscope."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: "An unexpected error occurred."
 */
