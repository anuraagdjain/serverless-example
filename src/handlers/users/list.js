module.exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            data: {
                users: [
                    {
                        firstName: 'test1',
                        lastName: 'user2'
                    },
                    {
                        firstName: 'test2',
                        lastName: 'user2'
                    }
                ]
            }
        })
    };
};