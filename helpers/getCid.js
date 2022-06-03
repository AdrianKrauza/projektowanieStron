function getClientId() {
    try {
        var trackers = ga.getAll();
        var i, len;
        for (i = 0, len = trackers.length; i < len; i += 1) {
            if (trackers[i].get('trackingId') === 'UA-7397797-1') {
                return trackers[i].get('clientId');
            }
        }
    } catch (e) {}
    return 'false';
}
export default getClientId;
