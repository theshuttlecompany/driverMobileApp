function createRequestTypes(base, types = defaultTypes) {
	const res = {}
	types.forEach(type => (res[type] = `${base}_${type}`))
	return res
}

export const ROUTE = createRequestTypes('ROUTE', ['SET', 'RESET']);
