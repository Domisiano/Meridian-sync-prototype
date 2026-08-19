module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const { itemId, stockCount, status } = req.body;
    console.log(`Received update for Item \${itemId}: \${stockCount} units (\${status})`);
    return res.status(200).json({ received: true, message: `Sync successful for item \${itemId}` });
  } catch (error) {
    return res.status(400).json({ error: 'Invalid payload configuration' });
  }
};
