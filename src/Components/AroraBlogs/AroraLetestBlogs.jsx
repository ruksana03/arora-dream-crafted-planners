

const AroraLetestBlogs = () => {
    return (
        <div className="m-6">
            <div>
                <h1 className="text-4xl font-medium">Recent <span className="font-bold">Post</span></h1>

                <hr />
            </div>
            <div className="my-4">
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                       How to join this events?
                    </div>
                    <div className="collapse-content">
                        <p>visit our website and follow the registration instructions provided for each event. We look forward to having you participate!</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    How to make a new events?
                    </div>
                    <div className="collapse-content">
                        <p>To create a new event on our website, go to the "Create Event" section, fill out the event details, upload necessary information, and submit for review. Your event will be live once approved.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    How to purchase tickets for an event?
                    </div>
                    <div className="collapse-content">
                        <p>To buy tickets for an event, navigate to the event page, select the ticket type and quantity, and proceed to checkout securely through our online ticketing platform.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What happens if I need to cancel my event registration?
                    </div>
                    <div className="collapse-content">
                        <p> If you need to cancel your event registration, please contact our support team at least 72 hours before the event for assistance with refunds or rescheduling options.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    Can I host my own cultural event through your platform?
                    </div>
                    <div className="collapse-content">
                        <p>We welcome event organizers to host their cultural events with us. Simply visit the "Host an Event" section, provide event details, and our team will assist you in making it a memorable success.</p>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    );
};

export default AroraLetestBlogs;