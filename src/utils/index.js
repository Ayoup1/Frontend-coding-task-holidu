export const formatProperties = apartments => {
	let ITEMS = [];
	if (apartments && apartments.length > 0) {
		return apartments.map(x => ({
			title: x.details.name,
			photos: [x.photos[0].t, x.photos[1].t, x.photos[2].t],
			rating: x.rating.value / 10 / 2,
			url: `https://www.holidu.com${x.detailsLink}`,
			location: x.location.name,
			currency: x.price.currency,
			price: x.price.total,
			space: x.details.shortName.join(" ")
		}));
	}
	return ITEMS;
};
