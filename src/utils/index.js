export const formatProperties = apartments => {
	let ITEMS = [];

	if (apartments && apartments.length > 0) {
		return apartments.map(x => ({
			title: x.details.name,
			photos: getPhotos(x.photos),
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

const getPhotos = items => {
	let photos = [];
	const slicedItems = items.slice(0, 3);
	if (slicedItems && slicedItems.length > 0) {
		return slicedItems.map(x => x.t);
	}

	return photos;
};
