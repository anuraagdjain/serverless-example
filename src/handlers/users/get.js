module.exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            data: {
                user: {
                    firstName: 'test',
                    lastName: 'user',
                    id: event.pathParameters.id
                }
            }
        })
    };
};