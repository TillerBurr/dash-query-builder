
module DashQueryBuilder
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.5.0"

include("jl/dashquerybuilder.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_query_builder",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-mui.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-mui.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-antd.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-antd.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-bootstrap.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-bootstrap.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-basic.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-basic.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-mui.min.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-mui.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-antd.min.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-antd.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-bootstrap.min.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-bootstrap.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-basic.min.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.5.0/dash_query_builder/async-basic.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_query_builder.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_query_builder.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
