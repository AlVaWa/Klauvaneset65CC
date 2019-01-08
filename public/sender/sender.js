window['__onGCastApiAvailable'] = function(isAvailable) {
    if (isAvailable) {
        initializeCastApi();
    }
};

initializeCastApi = function() {
    const applicationId = '2C4F1EF0';

    cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: applicationId,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });

};

playWithFire = function() {
    const castSession = cast.framework.CastContext.getInstance().getCurrentSession();

    const mediaInfo = new chrome.cast.media.MediaInfo('https://d2v9y0dukr6mq2.cloudfront.net/video/preview/hlOnnIj/natural-burning-fire-flame-on-the-black-background-red-and-yellow-body-of-flame-flashing-4k-uhd-video-footage_rmfvvx0n__SB_PM.mp4', 'video');
    const request = new chrome.cast.media.LoadRequest(mediaInfo);
    castSession.loadMedia(request).then(
        function() {
            console.log('Load succeed');
        }, function(errorCode) {
            console.log('Error code: ' + errorCode);
        }
    );

    const player = new cast.framework.RemotePlayer();
    const playerController = new cast.framework.RemotePlayerController(player);

    playerController.playOrPause();
};

playOrPause = function () {
    const player = new cast.framework.RemotePlayer();
    const playerController = new cast.framework.RemotePlayerController(player);

    playerController.playOrPause();

};

stop = function () {
    const player = new cast.framework.RemotePlayer();
    const playerController = new cast.framework.RemotePlayerController(player);

    playerController.stop();
};

changeVolume = function(newVolume) {
    const player = new cast.framework.RemotePlayer();
    const playerController = new cast.framework.RemotePlayerController(player);

    player.volumeLevel = newVolume;
    playerController.setVolumeLevel();
};