module.exports.init = function () {
    module.dispatchEvent({ event: 'xhttp', url: 'http://www.leagueofautomatednations.com/map/shard0/rooms.js' }, function (response0) {
        module.dispatchEvent({ event: 'xhttp', url: 'http://www.leagueofautomatednations.com/map/shard1/rooms.js' }, function (response1) {
            module.dispatchEvent({ event: 'xhttp', url: 'http://www.leagueofautomatednations.com/map/shard2/rooms.js' }, function (response2) {
                module.dispatchEvent({ event: 'xhttp', url: 'http://www.leagueofautomatednations.com/map/shard3/rooms.js' }, function (response3) {

                    module.exports.shards = {}
                    module.exports.shards["shard0"] = { rooms: JSON.parse(response0.data) };
                    module.exports.shards["shard1"] = { rooms: JSON.parse(response1.data) };
                    module.exports.shards["shard2"] = { rooms: JSON.parse(response2.data) };
                    module.exports.shards["shard3"] = { rooms: JSON.parse(response3.data) };

                    module.dispatchEvent({ event: 'xhttp', url: 'http://www.leagueofautomatednations.com/alliances.js' }, function (response) {
                        module.alliances = JSON.parse(response.data);

                        module.userToAlliance = {}

                        for (var alliance in module.alliances) {
                            var members = module.alliances[alliance].members;
                            for (var member in members) {
                                var memberName = members[member];

                                module.userToAlliance[memberName] = alliance;
                            }
                        }

                        module.getScopeData("md-sidenav-left", "Top", [], function (Top) {
                            var radarSvg = module.exports.getRadarSvg();
                            var sideBar = $(`<a class="md-button md-ink-ripple">
                                        <span style="margin: 0 10px 0 3px;opacity: 0.4;top:2px;position:relative;">
                                            ${radarSvg}
                                        </span>
	@@ -31,17 +35,19 @@ module.exports.init = function(){
                                        </span>
                                    </a>`)

                            sideBar.click(function () {
                                Top.toggleMainNav();
                                module.exports.openModal();
                            });

                            var leftBar = $(".md-sidenav-left a").eq(3).after(sideBar);
                        });
                    });

                });

            });
        });
    });
}