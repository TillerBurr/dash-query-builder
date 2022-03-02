
module DashQueryBuilder
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.3.2"

include("jl/dashquerybuilder.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_query_builder",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-material.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-material.min.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-mui.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-mui.min.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-antd.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-antd.min.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-bootstrap.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-bootstrap.min.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-basic.min.js",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-basic.min.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-{async_resource}.{mode_suffix}.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-material.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-{async_resource}.{mode_suffix}.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-mui.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-{async_resource}.{mode_suffix}.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-antd.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-{async_resource}.{mode_suffix}.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-bootstrap.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-{async_resource}.{mode_suffix}.js.map",
    external_url = "https://unpkg.com/dash_query_builder@0.3.2/dash_query_builder/async-basic.min.js.map",
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
    relative_package_path = "dash_query_builder.shared.min.js",
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
),
DashBase.Resource(
    relative_package_path = "dash_query_builder.shared.min.js.map",
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
