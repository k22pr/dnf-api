import * as Request from "./api";
import * as Util from "./util";
import * as Model from "./model/index";

import * as Params from "./util/params";
import Config from "./util/config";
import * as Static from "./util/static";
import * as Query from "./util/query";

export default class DnfApi {
  public static Util = Util;
  public static Request = Request;
}

const ServerNames = Static.Server;
const RarityNames = Static.Rarity;

export { Request as Api, Request, Config, Static, ServerNames, RarityNames, Query, Params, Model };
