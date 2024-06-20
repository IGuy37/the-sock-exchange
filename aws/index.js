const sharp = require('sharp');

exports.handler = async (event) => {
    try {
        const inputBuffer = Buffer.from(event.body, 'base64');

        const outputBuffer = await sharp(inputBuffer)
            .resize(100, 100)  // You can adjust the dimensions as needed
            .toBuffer();

        const outputBase64 = outputBuffer.toString('base64');

        return {
            statusCode: 200,
            isBase64Encoded: true,
            headers: {
                'Content-Type': 'image/jpeg',
            },
            body: outputBase64,
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error processing image' }),
        };
    }
};